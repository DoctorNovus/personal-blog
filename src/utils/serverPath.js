import path from 'path'
import getConfig from 'next/config'

const serverPath = (staticFilePath) => path.join(getConfig().serverRuntimeConfig.PROJECT_ROOT, staticFilePath);

export default serverPath