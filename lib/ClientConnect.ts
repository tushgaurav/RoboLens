export function startPose(id: Number) {
    console.log("startPose");
    const ROBOT_CLIENT_URL = process.env.ROBOT_CLIENT_URL;
    fetch(`${ROBOT_CLIENT_URL}pose`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name: "teting", id: id })
    });
    
}