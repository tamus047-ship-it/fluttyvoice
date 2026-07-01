async function generate() {
  const text = document.getElementById("text").value;

  const response = await fetch("https://api.elevenlabs.io/v1/text-to-speech/CeAjv3teQ7WvtV4vyRFm", {
    method: "POST",
    headers: {
      "xi-api-key": "sk_9a0bdc3b0379f23506dd96d06af2eee2b1920ee5a76b9417",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      text: text,

      // Najbardziej ludzki model
      model_id: "eleven_multilingual_v2",

      // Wymuszony angielski – zero przełączania języka
      language: "en",

      // Ustawienia ultra-ludzkie
      voice_settings: {
        stability: 0.10,          // Bardzo emocjonalne, naturalne
        similarity_boost: 0.85,   // Zachowuje twój głos, ale dodaje realizm
        style: 0.80,              // Naturalny flow narracji
        use_speaker_boost: true   // Głębia i ludzkie brzmienie
      }
    })
  });

  const audioBlob = await response.blob();
  const audioURL = URL.createObjectURL(audioBlob);

  addToHistory(text, audioURL);
}

function addToHistory(text, audioURL) {
  const historyDiv = document.getElementById("history");

  const item = document.createElement("div");
  item.className = "history-item";

  item.innerHTML = `
    <div>
      <strong>Text:</strong><br>${text}
    </div>
    <div>
      <audio controls src="${audioURL}"></audio>
      <br>
      <a href="${audioURL}" download="banowy_voice.wav">Download</a>
    </div>
  `;

  historyDiv.prepend(item);
}
