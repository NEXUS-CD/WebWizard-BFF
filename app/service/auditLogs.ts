import { Service } from 'egg';

interface InterLogMsg {
  visitorIp: string;
  visitUrl: string;
  username: string;
  userId: string;
  logType: string;
  descible: string;
  searchCon: string;
}

export default class AuditLogs extends Service {
  /**
   * 注册
   * @param user - 用户信息
   */
  async createLogs(logMsg: InterLogMsg) {
    const res = await this.ctx.model.AuditLogs.create(logMsg);
    return res;
  }
}
