document.getElementById("giftForm").addEventListener("submit", async function (e) {
    e.preventDefault(); // Verhindert das Neuladen der Seite

    // Formulardaten auslesen
    const userEmail = document.getElementById("email").value; // Nutzer-E-Mail für die Antwort
    const age = document.getElementById("age").value; // Alter der zu beschenkenden Person
    const gender = document.getElementById("gender").value; // Geschlecht der Person
    const interests = document.getElementById("interests").value; // Interessen der Person
    const social = document.getElementById("social").value; // Social Media Konten (@username)

    // Konfiguration für EmailJS
    const serviceID = "service_pmc6k1j"; // Deine Service ID
    const templateID = "template_esjym2j"; // Deine Template ID
    const userID = "M2twtQkcH9OGNoyGZ"; // Dein Public Key

    // Daten, die an EmailJS gesendet werden
    const emailData = {
        user_email: userEmail, // E-Mail des Nutzers
        age: age, // Alter
        gender: gender, // Geschlecht
        interests: interests, // Interessen
        social: social, // Social Media Plattformen
    };

    // Versuch, die E-Mail zu senden
    try {
        const response = await emailjs.send(serviceID, templateID, emailData, userID);
        console.log("E-Mail erfolgreich gesendet:", response); // Erfolgs-Log
        alert("Daten erfolgreich gesendet! Schau in deinem Postfach nach.");
    } catch (error) {
        console.error("Fehler beim Senden der E-Mail:", error); // Fehler-Log
        alert(`Es gab ein Problem beim Senden der E-Mail: ${error.text || error.message}`);
    }
});
