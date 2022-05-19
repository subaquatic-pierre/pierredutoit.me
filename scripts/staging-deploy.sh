#!/bin/bash

if [ -f .env ]
then
  export $(grep -v '^#' .env | xargs)
fi

aws s3 cp build/ s3://$STAGING_S3_BUCKET_ID/ --recursive

aws cloudfront create-invalidation --distribution-id $STAGING_CLOUDFRONT_DISTRIBUTION_ID --paths "/*"