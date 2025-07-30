// ctrl-crash.pinokio.ts
export default defineApp({
  id: "ctrl-crash",
  name: "Ctrl Crash Anonymous",
  icon: "https://your-icon-link.png",
  homepage: "https://github.com/your/repo",
  async onInstall() {
    await this.runCommand("git clone https://github.com/YOUR_USER/Ctrl-Crash-Anonymous.git");
    await this.runCommand("conda env create -f environment.yaml", { cwd: "Ctrl-Crash-Anonymous" });
  },
  async onRun() {
    await this.runCommand("conda activate ctrl-crash && python app.py", { cwd: "Ctrl-Crash-Anonymous" });
  }
});
