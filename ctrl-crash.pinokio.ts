export default defineApp({
  id: "ctrl-crash",
  name: "Ctrl Crash",
  icon: "icon.png", // or direct URL
  homepage: "https://github.com/AnthonyGosselin/Ctrl-Crash",
  async onInstall() {
    await this.runCommand(
      "git clone https://github.com/AnthonyGosselin/Ctrl-Crash.git"
    );
    await this.runCommand("pip install -r requirements.txt", {
      cwd: "Ctrl-Crash"
    });
  },
  async onRun() {
    await this.runCommand("run_gen_videos.py", {
      cwd: "Ctrl-Crash"
    });
  }
});
