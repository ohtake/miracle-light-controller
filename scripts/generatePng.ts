import path from "path";
import sharp, { format } from "sharp";

const outDir = process.argv[2];

(async () => {
  const sizes = [32, 192, 512];
  const input = sharp("static/mlc.svg");
  await Promise.all(
    sizes.map((s) =>
      input
        .toFormat(format.png)
        .resize({ width: s, height: s })
        .toFile(path.join(outDir, `mlc-${s}.png`))
    )
  );
})();
