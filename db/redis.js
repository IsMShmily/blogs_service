const { REDIS_HOST, REDIS_PORT } = require("../config");
const Redis = require("ioredis");

const redis = new Redis({
  host: REDIS_HOST,
  port: REDIS_PORT,
});

redis.on("error", (err) => {
  console.error("Redis client error:", err);
});

module.exports = redis;
