export const state = () => ({
  isNavbarExpanded: false,
  appWidth: 0,
  appHeight: 0,
});

export const mutations = {
  setNavbarState(state: any, newValue: boolean) {
    state.isNavbarExpanded = newValue;
  },
  setAppDimensions(state: any, dimensions: {width: number, height: number}) {
    state.appHeight = dimensions.height;
    state.appWidth = dimensions.width;
  }
}

export const getters = {
  isMobileView(state: any) {
    return state.appWidth <= 768;
  },
  canRender(state: any): boolean {
    return (state.appWidth > 768 || !state.isNavbarExpanded && state.appWidth <= 768);
  }
}
