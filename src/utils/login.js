export default (func) => {
    chayns.addAccessTokenChangeListener(func);
    //no Reload ok?
    chayns.login();
};
