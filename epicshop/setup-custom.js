import path from 'node:path'
import { warm } from '@epic-web/workshop-cli/warm'
import {
	getApps,
	isProblemApp,
	setPlayground,
} from '@epic-web/workshop-utils/apps.server'
import fsExtra from 'fs-extra'

await warm()
