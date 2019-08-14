export default (func) => {
    chayns.addAccessTokenChangeListener(func);
    //no Reload
    chayns.login();
};
