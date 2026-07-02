const assert = require("node:assert/strict");
const fs = require("node:fs");

const html = fs.readFileSync("classic.html", "utf8");

const includes = (value) => {
  assert.ok(html.includes(value), `Expected classic.html to include: ${value}`);
};

includes('src="./assets/封面.jpeg"');
includes('data-lightbox-src="./assets/封面.jpeg"');

includes('id="hall-01"');
includes("酷男.jpeg");
includes("酷女.jpeg");
includes("酷两人.jpeg");
includes('class="photo-collage photo-collage-three"');
includes("酷酷的我们");

includes('id="hall-02"');
includes("户外举手.jpeg");
includes("一起奔向远方");

includes('id="hall-03"');
includes("幸福.jpeg");
includes("幸福定格");

includes('id="hall-04"');
includes("烟花面对.jpeg");
includes("烟花蓝调.jpeg");
includes('class="photo-collage photo-collage-two"');
includes("烟火与约定");

assert.ok(!html.includes('id="hall-05"'), "Expected hall-05 to be removed");
assert.ok(!html.includes('href="#hall-05"'), "Expected hall-05 nav link to be removed");
assert.ok(!html.includes('data-next="#hall-05"'), "Expected no navigation to hall-05");
assert.equal((html.match(/class="carousel-track"/g) || []).length, 0);
assert.equal((html.match(/data-lightbox-src=/g) || []).length, 8);

console.log("classic static checks passed");
