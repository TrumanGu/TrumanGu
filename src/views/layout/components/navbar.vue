<template>
  <nav class="tg-navbar">
    <div class="tg-navbar__container">
      <div class="inner">
        <h1>
          <router-link to="/">TrumanGu</router-link>
        </h1>
        <div class="right">
          <ul>
            <router-link tag="li" to="/">Home</router-link>
            <router-link tag="li" to="/timeline">Timeline</router-link>
            <Dropdown>
              <a href="javascript:void(0)">
                Design
                <Icon type="ios-arrow-down"></Icon>
              </a>
              <DropdownMenu slot="list">
                <DropdownItem v-for="item of shareLinkList" :key="item.id">
                  <a :href="item.share_link" target="_blank">{{ item.share_name}}</a>
                </DropdownItem>
                <DropdownItem disabled divided>Comming</DropdownItem>
              </DropdownMenu>
            </Dropdown>
            <!-- <router-link tag="li" to="/design"></router-link> -->
            <router-link tag="li" to="/comming">Friends</router-link>
            <router-link tag="li" to="/comming">About Me</router-link>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { DropdownMenu, Dropdown, DropdownItem, Icon } from "iview";
import { queryAllShares } from "@/api/public/share";

export default {
  name: "TG-Navbar",
  components: { DropdownMenu, Dropdown, DropdownItem, Icon },
  data() {
    return {
      shareLinkList: []
    };
  },
  mounted() {
    queryAllShares().then(res => {
      if (res && res.code === 200) {
        this.shareLinkList = res.data;
      }
    });
  }
};
</script>