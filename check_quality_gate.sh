#!/bin/sh

PROJECT_KEY=${PROJECT_KEY}
SONAR_HOST=${SONAR_HOST}
SONAR_TOKEN=${SONAR_TOKEN}

CE_TASK_ID=$(curl -u $SONAR_TOKEN: $SONAR_HOST/api/ce/component?component=$PROJECT_KEY | jq -r '.current.id')
echo $CE_TASK_ID

QUALITY_GATE_STATUS=$(curl -u $SONAR_TOKEN: $SONAR_HOST/api/ce/task?id=$CE_TASK_ID | jq -r '.task.status')
echo $QUALITY_GATE_STATUS

if [ "$QUALITY_GATE_STATUS" = "SUCCESS" ]; then
  echo 'Quality Gate passed'
  exit 0
else
  echo 'Quality Gate failed'
  exit 1
fi
