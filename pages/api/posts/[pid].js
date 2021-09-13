import serverPath from "../../../utils/serverPath";
import fs from "fs";

export default function handler(req, res) {
    const pid = req.url.split("/api/posts/")[1];

    if (!pid || pid == "undefined") {
        res.end("null");
        return;
    }

    const config = fs.readFileSync(serverPath(`files/${pid}.json`));
    res.status(200).json(config);
}
