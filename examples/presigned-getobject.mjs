/*
 * MinIO Javascript Library for Amazon S3 Compatible Cloud Storage, (C) 2015 MinIO, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http:   //www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// Note: YOUR-ACCESSKEYID, YOUR-SECRETACCESSKEY, my-bucketname and my-objectname
// are dummy values, please replace them with original values.

import dotenv from 'dotenv'
import * as Minio from '../dist/esm/minio.mjs'

dotenv.config()

const { 
  SERVER_ENDPOINT, 
  ACCESS_KEY, 
  SECRET_KEY, 
  USESSL, 
  PORT 
} = process.env

const s3Client = new Minio.Client({
  endPoint  : SERVER_ENDPOINT,
  accessKey : ACCESS_KEY,
  secretKey : SECRET_KEY,
  useSSL    : USESSL === 'true',
  port      : parseInt(PORT),
  domain    : 'your-domain.com',
})


// Presigned get object URL for my-objectname at my-bucketname, it expires in 7 days by default.
const presignedUrl = await s3Client.presignedGetObject('your-bucket', 'your-object', 7 * 24 * 60 * 60)
console.log(presignedUrl)
