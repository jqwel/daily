"use strict";

// DOM positions use the top-left origin of the displayed game map.
function positionOnGameMap(marker, point) {
  marker.style.left = point.x * 100 + "%";
  marker.style.top = point.y * 100 + "%";
}

function isMapPoint(point) {
  return Number.isFinite(point?.x) && point.x >= 0 && point.x <= 1 &&
    Number.isFinite(point.y) && point.y >= 0 && point.y <= 1;
}

function enableMapPlacement(board, cursor, label, submit, dragHandle) {
  const image = board.querySelector(".game-map-image");
  let point = { x: 0.5, y: 0.5 };
  function pointerPoint(event) {
    const rect = image.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;
    return x >= 0 && x <= 1 && y >= 0 && y <= 1 ? { x, y } : null;
  }
  function preview(next) {
    cursor.hidden = !next;
    if (next) {
      point = next;
      positionOnGameMap(cursor, point);
    }
  }
  board.tabIndex = 0;
  board.setAttribute("role", "button");
  board.setAttribute("aria-label", label);
  board.classList.add("clickable-map");
  cursor.hidden = true;
  board.append(cursor);
  board.onclick = (e) => {
    const next = e.detail === 0 ? point : pointerPoint(e);
    if (next) submit(next);
  };
  board.onkeydown = (e) => {
    const arrows = {
      ArrowLeft: [-1, 0],
      ArrowRight: [1, 0],
      ArrowUp: [0, -1],
      ArrowDown: [0, 1],
    };
    if (arrows[e.key]) {
      e.preventDefault();
      const [dx, dy] = arrows[e.key],
        step = e.shiftKey ? 0.002 : 0.02;
      preview({
        x: Math.min(1, Math.max(0, point.x + dx * step)),
        y: Math.min(1, Math.max(0, point.y + dy * step)),
      });
    } else if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      submit(point);
    }
  };
  if (!dragHandle) return;
  let origin;
  function endDrag() {
    origin = null;
    dragHandle.style.removeProperty("transform");
    dragHandle.classList.remove("dragging", "over-map");
    preview(null);
  }
  dragHandle.onpointerdown = (e) => {
    if (!e.isPrimary || e.button !== 0) return;
    origin = { x: e.clientX, y: e.clientY };
    dragHandle.classList.add("dragging");
    dragHandle.setPointerCapture(e.pointerId);
  };
  dragHandle.onpointermove = (e) => {
    if (!origin || !dragHandle.hasPointerCapture(e.pointerId)) return;
    const next = pointerPoint(e);
    dragHandle.style.transform = `translate(${e.clientX - origin.x}px, ${e.clientY - origin.y}px)`;
    dragHandle.classList.toggle("over-map", Boolean(next));
    preview(next);
  };
  dragHandle.onpointerup = (e) => {
    if (!dragHandle.hasPointerCapture(e.pointerId)) return;
    const next = pointerPoint(e);
    dragHandle.releasePointerCapture(e.pointerId);
    endDrag();
    if (next) submit(next);
  };
  dragHandle.onlostpointercapture = endDrag;
}

function createWorldPuzzle(
  first,
  pool,
  rule,
  dimensions,
  { place, imageOf, ipa, zh, mapPlate, action, shuffle, openEntry, onChange },
  saved,
) {
  const [mapWidth, mapHeight] = dimensions;
  // BordersPuzzleGameConfig uses 100 reference pixels per world unit.
  const pixelsPerUnit = 100;
  const scoring = rule.gameplay;
  let target = first,
    result = null,
    ticker;
  let deck;
  let placed = [],
    total = 0,
    attempts = 0,
    deadline = null,
    finished = false;

  if (saved) {
    const pieces = new Map(pool.map((piece) => [piece.placeId, piece]));
    if (!Array.isArray(saved.deck) || !Array.isArray(saved.placed) ||
        !Number.isSafeInteger(saved.total) || saved.total < 0 ||
        !Number.isSafeInteger(saved.attempts) || saved.attempts < 0 ||
        (saved.deadline !== null && !Number.isSafeInteger(saved.deadline)) ||
        (saved.point !== null && !isMapPoint(saved.point))) return null;
    deck = saved.deck.map((id) => pieces.get(id));
    placed = saved.placed.map((id) => pieces.get(id));
    if (deck.includes(undefined) || placed.includes(undefined)) return null;
    total = saved.total;
    attempts = saved.attempts;
    deadline = saved.deadline;
    finished = saved.finished === true;
    result = saved.point && placement(saved.point);
  } else {
    deck = shuffle(pool.filter((piece) => piece !== first));
  }

  function snapshot() {
    return {
      target: target.placeId,
      deck: deck.map((piece) => piece.placeId),
      placed: placed.map((piece) => piece.placeId),
      point: result?.point ?? null,
      total, attempts, deadline, finished,
    };
  }

  function placement(point) {
    const error =
      Math.hypot(
        point.x * mapWidth - target.pixelX,
        point.y * mapHeight - target.pixelY,
      ) / pixelsPerUnit;
    const points =
      error <= scoring._goodThreshold
        ? scoring._goodPoints
        : error <= scoring._averageThreshold
          ? scoring._averagePoints
          : 0;
    return { point, points };
  }

  function mapPiece(piece, point) {
    const img = picture(imageOf(piece), "", "puzzle-overlay");
    img.loading = "eager";
    // Two WebPs were reduced for the atlas. Restore their cropped texture
    // widths on the reference grid, including Russia's imported pixels/unit.
    const nativeWidth = {
      CAN: 1290,
      RUS: (2046 * pixelsPerUnit) / 82.05128479003906,
    };
    function size() {
      img.style.width =
        ((nativeWidth[piece.placeId] ?? img.naturalWidth) / mapWidth) * 100 +
        "%";
    }
    img.addEventListener("load", size, { once: true });
    if (img.complete && img.naturalWidth) size();
    positionOnGameMap(img, point);
    return img;
  }

  function render(main, nextQuestion, standalone) {
    clearInterval(ticker);
    main.replaceChildren();
    const expired = () => deadline !== null && Date.now() >= deadline;
    const redraw = () => {
      onChange();
      render(main, nextQuestion, standalone);
    };
    const startRound = () => {
      deck = shuffle(pool);
      target = deck.pop();
      deadline = Date.now() + rule.roundSeconds * 1000;
      placed = [];
      total = attempts = 0;
      finished = false;
      result = null;
      redraw();
    };
    main.append(element("small", "eyebrow", rule.title + " · " + rule.titleZh));
    if (finished || expired()) {
      main.append(
        element("h2", "study-title", "Round complete · 本轮结束"),
        element(
          "p",
          "feedback",
          "累计 " + total + " 分 · 已作答 " + attempts + " 块",
        ),
      );
      const actions = element("div", "entry-buttons");
      actions.append(
        action(
          "Play again · 再玩一轮",
          deadline === null ? nextQuestion : startRound,
        ),
      );
      if (deadline !== null)
        actions.append(action("Untimed practice · 自由练习", nextQuestion));
      main.append(actions);
      return;
    }
    const p = place(target);
    if (standalone && (attempts || deadline !== null)) {
      const clock = element("span", "version-stamp");
      const score = "累计 " + total + " 分";
      function updateClock() {
        const seconds = Math.max(
          0,
          Math.ceil((deadline - Date.now()) / 1000),
        );
        clock.textContent =
          Math.floor(seconds / 60) +
          ":" +
          String(seconds % 60).padStart(2, "0") +
          " · " +
          score;
      }
      if (deadline !== null) {
        updateClock();
        ticker = setInterval(() => {
          if (!clock.isConnected) clearInterval(ticker);
          else if (expired()) redraw();
          else updateClock();
        }, 250);
      } else clock.textContent = score;
      main.append(clock);
    }
    const title = element("div", "word-stack");
    title.append(
      element("h2", "study-title", "Place " + placeLabel(p)),
      element("span", "ipa", ipa(p)),
      element("span", "word-zh", zh(p)),
    );
    const tray = element("div", "puzzle-tray");
    const handle = picture(imageOf(target), placeLabel(p), "puzzle-tile");
    handle.draggable = false;
    if (!result) handle.classList.add("draggable-piece");
    tray.append(handle, title);
    main.append(tray);
    if (!result)
      main.append(
        element(
          "p",
          "source-small",
          "把拼块拖到地图上，或直接点选位置。方向键移动，Shift 微调，Enter 放置。",
        ),
      );
    const board = mapPlate(result ? target : null, result?.point);
    const correctPoint = (piece) => ({ x: piece.x, y: 1 - piece.y });
    for (const piece of placed) {
      if (piece !== target) board.append(mapPiece(piece, correctPoint(piece)));
    }
    main.append(board);
    if (result) {
      board.append(mapPiece(target, correctPoint(target)));
      const feedback = element("div", "feedback");
      feedback.tabIndex = -1;
      feedback.setAttribute("role", "status");
      const grade =
        result.points === scoring._goodPoints
          ? "精准"
          : result.points
            ? "接近"
            : "偏远";
      feedback.append(
        element("strong", "", grade + " · " + result.points + " 分"),
        element("p", "", "蓝点是你的落点，红点和拼块标出正确位置。"),
      );
      main.append(feedback);
    } else {
      const cursor = mapPiece(target, { x: 0.5, y: 0.5 });
      cursor.classList.add("puzzle-cursor");
      enableMapPlacement(
        board,
        cursor,
        "Place " +
          placeLabel(p) +
          ". Arrow keys move, Shift fine-tunes, Enter places.",
        (point) => {
          if (expired()) {
            redraw();
            return;
          }
          if (result) return;
          result = placement(point);
          total += result.points;
          attempts++;
          if (result.points) placed.push(target);
          redraw();
          main.querySelector(".feedback")?.focus({ preventScroll: true });
        },
        handle,
      );
    }
    const actions = element("div", "entry-buttons");
    if (result || deadline === null) {
      const label =
        !deck.length && standalone
          ? "Finish · 结算"
          : result
            ? "Next question · 下一题"
            : "Skip · 换一题";
      actions.append(
        action(label, () => {
          if (!standalone) {
            nextQuestion();
            return;
          }
          if (deck.length) {
            target = deck.pop();
            result = null;
          } else finished = true;
          redraw();
        }),
      );
    }
    if (standalone && deadline === null)
      actions.append(action("Timed round · 限时挑战", startRound));
    if (result && deadline === null)
      actions.append(
        action("Study place · 查看词卡", () => openEntry(target.placeId)),
      );
    main.append(actions);
  }
  return { render, snapshot };
}
