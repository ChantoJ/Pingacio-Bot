module.exports = {
    name: "ready",
    once: true,
    execute(client){
        console.log(`Pingacio Online! Logged in as ${client.user.tag}`);
    },
}