import fs from "fs";
import serverPath from "../../utils/serverPath";

export default function handler(req, res) {
    let files = fs.readdirSync(serverPath("/files"));
    let newFiles = files.map(file => ({ pid: file.substr(0, file.length - 5), name: JSON.parse(fs.readFileSync(`${serverPath("/files")}/${file}`)).name, hint: JSON.parse(fs.readFileSync(`${serverPath("/files")}/${file}`)).hint }));
    res.status(200).json({ files: newFiles });
}
