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
      model_id: "eleven_multilingual_v2",
      voice_settings: {
        stability: 0.20,
        similarity_boost: 0.75,
        style: 0.60,
        use_speaker_boost: true
      }
    })
  });

  const audio = await response.blob();
  document.getElementById("audio").src = URL.createObjectURL(audio);
}
