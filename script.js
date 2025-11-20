function getToken() {
    const data = localStorage.getItem("token");
    if (!data) return null;
    try {
        const parsed = JSON.parse(data);
        if (typeof parsed === "object" && parsed.token) return parsed.token;
        return parsed;
    } catch {
        return data;
    }
}
window.getToken = getToken;