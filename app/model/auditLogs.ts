// import { Application } from "egg";

export default (app) => {
  const { mongoose } = app;
  const { Schema } = mongoose;
  const auditLogsSchema = new Schema(
    {
      visitorIp: String,
      visitUrl: String,
      username: String,
      userId: String,
      logType: String,
      descible: String,
      searchCon: String,
    },
    {
      usePushEach: true,
      timestamps: { createdAt: 'createTime', updatedAt: 'updateTime' },
    }
  );
  return mongoose.model('auditLog', auditLogsSchema);
};
