function getRecommendation() {
  const budget = parseInt(document.getElementById("budget").value);
  const usage = document.getElementById("usage").value.toLowerCase();
  const resultsDiv = document.getElementById("results");

  if (!budget || isNaN(budget) || budget < 500000) {
    resultsDiv.innerHTML = "<p style='color: red;'>50만 원 이상을 입력하세요.</p>";
    return;
  }

  let recommendation = "";
  let partName = "";

  if (usage.includes("게임") || usage.includes("gaming")) {
    if (budget < 800000) {
      recommendation = "가성비 게이밍 PC: Ryzen 5 5600G (내장 그래픽)";
      partName = "Ryzen 5 5600G";
    } else if (budget < 1200000) {
      recommendation = "엔트리 게이밍 PC: Ryzen 5 5600 + GTX 1650";
      partName = "GTX 1650";
    } else if (budget < 1600000) {
      recommendation = "중급 게이밍 PC: Intel i5-12400F + RTX 3060";
      partName = "RTX 3060";
    } else if (budget < 2200000) {
      recommendation = "고급 게이밍 PC: Ryzen 7 7700X + RTX 4060 Ti";
      partName = "RTX 4060 Ti";
    } else if (budget <= 3000000) {
      recommendation = "최고급 게이밍 PC: Intel i7-13700K + RTX 4080";
      partName = "RTX 4080";
    } else {
      recommendation = "울트라 게이밍 PC: Intel i9-13900K + RTX 4090";
      partName = "RTX 4090";
    }
  } else if (usage.includes("영상") || usage.includes("편집")) {
    if (budget < 1000000) {
      recommendation = "가성비 편집 PC: Ryzen 5 5600G + 16GB RAM";
      partName = "Ryzen 5 5600G";
    } else if (budget < 1500000) {
      recommendation = "중급 편집 PC: Ryzen 7 5700X + RTX 3050 + 32GB RAM";
      partName = "RTX 3050";
    } else if (budget < 2000000) {
      recommendation = "고급 편집 PC: Intel i7-12700K + RTX 3070 + 32GB RAM";
      partName = "RTX 3070";
    } else if (budget <= 3000000) {
      recommendation = "전문가용 편집 PC: Intel i9-13900K + RTX 4080 + 64GB RAM";
      partName = "RTX 4080";
    } else {
      recommendation = "하이엔드 편집 PC: Threadripper 7960X + RTX 4090 + 128GB RAM";
      partName = "RTX 4090";
    }
  } else if (usage.includes("사무") || usage.includes("오피스") || usage.includes("office")) {
    if (budget < 700000) {
      recommendation = "기본 사무용 PC: Ryzen 3 3200G + 8GB RAM";
      partName = "Ryzen 3 3200G";
    } else if (budget < 1000000) {
      recommendation = "가성비 사무용 PC: Intel i3-12100 + 16GB RAM";
      partName = "Intel i3-12100";
    } else if (budget < 1500000) {
      recommendation = "고급 사무용 PC: Intel i5-12400 + 32GB RAM";
      partName = "Intel i5-12400";
    } else {
      recommendation = "프리미엄 사무용 PC: Intel i7-13700 + 32GB RAM + NVMe SSD";
      partName = "Intel i7-13700";
    }
  } else {
    recommendation = "다용도 PC: Ryzen 5 5600G + 16GB RAM";
    partName = "Ryzen 5 5600G";
  }

  // 다나와 검색 링크
  const searchURL = `https://search.danawa.com/dsearch.php?k1=${encodeURIComponent(partName)}`;

  resultsDiv.innerHTML = `
    <p><strong>추천 PC:</strong> ${recommendation}</p>
    <p><a href="${searchURL}" target="_blank">🛒 ${partName} 구매 링크 (다나와)</a></p>
  `;
}
