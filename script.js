function log(msg) {
  const logBox = document.getElementById("log");
  logBox.innerHTML += msg + "<br>";
  logBox.scrollTop = logBox.scrollHeight;
}

async function runAgents() {
  document.getElementById("log").innerHTML = "";
  document.getElementById("output").innerHTML = "";

  const input = document.getElementById("input").value;

  log("[系统] 接收任务...");
  await sleep(500);

  log("[Topic Agent] 生成选题...");
  await sleep(800);

  log("[Content Agent] 生成内容...");
  await sleep(1000);

  log("[Design Agent] 生成设计说明...");
  await sleep(800);

  log("[Review Agent] 审核内容...");
  await sleep(600);

  log("[系统] 输出结果");

  document.getElementById("output").innerHTML = `
    <h3>生成结果：</h3>
    <p><strong>任务：</strong>${input}</p>
    <p><strong>产品定位：</strong>面向公共空间的智能音响座椅</p>
    <p><strong>设计理念：</strong>融合功能与景观</p>
    <p><strong>使用场景：</strong>公园、广场</p>
    <p><strong>材料：</strong>复合混凝土 + 防水音响结构</p>
  `;
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
