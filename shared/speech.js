// English audio uses the voices installed in the browser or operating system.
function speakEnglish(text, unavailable) {
    if (!("speechSynthesis" in window) || !("SpeechSynthesisUtterance" in window)) {
        unavailable();
        return;
    }
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "en-US";
    utterance.rate = 0.88;
    utterance.voice = speechSynthesis.getVoices().find(voice => /^en[-_]US/i.test(voice.lang)) || null;
    utterance.onerror = event => {
        if (!["interrupted", "canceled"].includes(event.error)) unavailable();
    };
    speechSynthesis.cancel();
    speechSynthesis.speak(utterance);
}
