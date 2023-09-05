import useAxiosApi from '@/utils/useAxiosApi';
const urlPrefix = "http://localhost:8082";


/**
 * 账号密码登录
 * @returns UseAxiosReturn
 */
 function loginPassword(data: AnyObject) {
  return useAxiosApi(`${urlPrefix}/login/password`, { method: 'POST', data });
}

/**
 * 获取验证码
 * @returns UseAxiosReturn
 */
 function codeGet(data: AnyObject) {
  return useAxiosApi(`${urlPrefix}/user/code/get`, { method: 'POST', data });
}

/**
 * 重置密码
 * @returns UseAxiosReturn
 */
 function passwordLookup(data: AnyObject) {
  return useAxiosApi(`${urlPrefix}/user/password/lookup`, {
    method: 'POST',
    data
  });
}

/**
 * 普通用户注册
 * @returns UseAxiosReturn
 */
 function readerRegister(data: AnyObject) {
  return useAxiosApi(`${urlPrefix}/user/reader/register`, {
    method: 'POST',
    data
  });
}

/**
 * 首页获取作品列表
 * @returns UseAxiosReturn
 */
 function homeList(params: AnyObject) {
  return useAxiosApi(`${urlPrefix}/reader/work/home/list`, {
    method: 'GET',
    params
  });
}

/**
 * 读者获取作品详情
 * @returns UseAxiosReturn
 */
 function workDetail(params: AnyObject) {
  return useAxiosApi(`${urlPrefix}/reader/work/detail`, {
    method: 'GET',
    params
  });
}

/**
 * 获取合集相关作品
 * @returns UseAxiosReturn
 */
 function subjectRelated(params: AnyObject) {
  return useAxiosApi(`${urlPrefix}/reader/work/subject/related`, {
    method: 'GET',
    params
  });
}

/**
 * 记录视频播放次数
 * @returns UseAxiosReturn
 */
 function workPlay(data: AnyObject) {
  return useAxiosApi(`${urlPrefix}/work/play`, { method: 'POST', data });
}

/**
 * 修改用户头像
 * @returns UseAxiosReturn
 */
 function avatarChange(data: AnyObject) {
  return useAxiosApi(`${urlPrefix}/user/avatar/change`, {
    method: 'POST',
    data
  });
}

/**
 * 修改用户头像背景色
 * @returns UseAxiosReturn
 */
 function backcolorChange(data: AnyObject) {
  return useAxiosApi(`${urlPrefix}/user/backcolor/change`, {
    method: 'POST',
    data
  });
}

/**
 * 获取用户资料
 * @returns UseAxiosReturn
 */
 function userGet(params: AnyObject) {
  return useAxiosApi(`${urlPrefix}/user/get`, { method: 'GET', params });
}

/**
 * 修改用户信息
 * @returns UseAxiosReturn
 */
 function userModify(data: AnyObject) {
  return useAxiosApi(`${urlPrefix}/user/modify`, { method: 'POST', data });
}

/**
 * 修改密码
 * @returns UseAxiosReturn
 */
 function passwordChange(data: AnyObject) {
  return useAxiosApi(`${urlPrefix}/user/password/change`, {
    method: 'POST',
    data
  });
}

/**
 * 用户退出登录
 * @returns UseAxiosReturn
 */
 function userLogout(data: AnyObject) {
  return useAxiosApi(`${urlPrefix}/user/logout`, { method: 'POST', data });
}


export const apis = {
  userLogout:userLogout,
  passwordChange:passwordChange,
  userModify:userModify,
  userGet:userGet,
  backcolorChange:backcolorChange,
  avatarChange:avatarChange,
  workPlay:workPlay,
  subjectRelated:subjectRelated,
  workDetail:workDetail,
  readerRegister:readerRegister,
  homeList:homeList,
  codeGet:codeGet,
  passwordLookup:passwordLookup,
  loginPassword:loginPassword,
}