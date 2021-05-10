const got = require("got");
const source = require("./sourse");
const url = require("url");
const path = require("path");
const stream = require("stream/promises");
const fs = require("fs");

console.log("downloading...");

{
  (async () => {
    for (let i = 0; i < source.length; i++) {
      const chapterList = source[i];
      const chapterNum = i + 2;

      for (let j = 0; j < chapterList.length; j++) {
        const lessonUrl = chapterList[j];
        const basename = path.basename(lessonUrl);
        const fileName = `chapter${chapterNum}-${basename}`;
        console.log("🚀 ~ file: test.js ~ line 20 ~ fileName", fileName);

        await stream.pipeline(
          got.stream(lessonUrl),
          fs.createWriteStream(
            path.resolve("/Users/oliver/Desktop/yasiwang", fileName)
          )
        );

        await sleep();
      }
    }

    console.log("download finished");
  })();
}

function sleep(ms = 1000) {
  return new Promise((res) => {
    setTimeout(() => {
      res();
    }, ms);
  });
}
