export async function getAllEmployees(name) {
    const res = await fetch("http://api.additivasia.io/api/v1/assignment/employees/"+name, {
        method: "GET",
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "text/plain"
        },
    })
        .then(response => response.json())
        .then(res => {
            return res;
        });
    return res;
}