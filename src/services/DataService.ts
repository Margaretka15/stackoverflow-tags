const baseUrl = "https://api.stackexchange.com/2.3/tags?order=desc&sort=popular&site=stackoverflow";

async function getAllTags() {
    try {
        const response = await fetch(`${baseUrl}`, {
            method: 'GET',
            headers: {'Content-Type': 'application/json'},
        });
        return await response;
    } catch (err) {
        console.log(err)
    }
}
export {getAllTags}