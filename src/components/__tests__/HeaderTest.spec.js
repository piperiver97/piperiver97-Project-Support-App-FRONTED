import { shallowMount } from '@vue/test-utils';
import { describe, it, expect, beforeEach, vi } from 'vitest';
import Header from '@/components/Header.vue'; 
import auth from '@/stores/auth'; 

vi.mock('@/stores/auth', () => ({
  default: {
    isAuthenticated: false, 
    login: vi.fn((username, password) => {
      if (username === 'admin' && password === '0') {
        return true;
      } else {
        return false;
      }
    }),
    logout: vi.fn(() => {
     
    }),
  }
}));

describe('Header.vue', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(Header, {
      global: {
        stubs: {
          RouterLink: true, 
        }
      }
    });
  });

  it('should toggle menu visibility when menu icon is clicked', async () => {
    const menuIcon = wrapper.find('.menu-icon');
    await menuIcon.trigger('click');
    expect(wrapper.find('.navbar-links').classes()).toContain('active');
    
    await menuIcon.trigger('click');
    expect(wrapper.find('.navbar-links').classes()).not.toContain('active');
  });

  it('should display logout button when user is authenticated', async () => {
   
    auth.default.isAuthenticated = true;

   
    await wrapper.vm.$nextTick();

    expect(wrapper.find('.logout-btn').exists()).toBe(true);
  });

  it('should call logout method when logout button is clicked', async () => {

    auth.default.isAuthenticated = true;

    
    await wrapper.vm.$nextTick();

    const logoutButton = wrapper.find('.logout-btn');
    await logoutButton.trigger('click');
    expect(auth.default.logout).toHaveBeenCalled();
  });
});
