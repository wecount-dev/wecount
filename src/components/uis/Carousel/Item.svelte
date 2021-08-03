<style lang="postcss">
  .container {
    background-color: var(selectedColor);
    width: 330px;
    height: 100%;
    border-radius: 24px;
    box-shadow: 0px 4px 10px #d1f1ff, inset 0px 0px 142px #ebfbff;
  }
  .content-layout {
    padding: 28px 24px;
  }

  .profile-img-container {
    position: relative;
    display: inline-block;
    margin-right: 9px;
  }

  .profile-img {
    border-radius: 50%;
    width: 30px;
    height: 30px;
  }

  .crown {
    position: absolute;
    top: -2px;
    right: -5px;
    background-color: #ffc53d;
    border-radius: 50%;
    width: 14px;
    height: 14px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .community {
    margin-bottom: 13px;
  }

  .community-name {
    color: white;
    font-size: 1.2rem;
  }

  .community-introduction {
    color: #f0f5ff;
    text-transform: uppercase;
  }

  .user-container {
    display: flex;
    align-items: center;
  }

  .user-role {
    color: #f3f4f5;
    font-size: 0.7rem;
  }

  .user-name {
    color: white;
    font-size: 0.8rem;
  }
</style>

<script lang="ts">
  import {SvgCrown} from '../../../utils/Icon';
  import type {CommunityType, UserType} from './types.svelte';

  export let community: CommunityType;
  export let user: UserType;
  export let selectedColor: string;
</script>

<div class="container" style="background-color:{selectedColor}">
  <div class="content-layout">
    <div class="community">
      <div class="community-name">
        {community.name}
      </div>
      <div class="community-introduction">
        {community.description}
      </div>
    </div>
    <div class="user-container">
      <div class="profile-img-container">
        <img class="profile-img" src={user.imageUrl} alt={user.name} />
        <div class="crown">
          <SvgCrown />
        </div>
      </div>
      <div>
        <div class="user-role">{user.role}</div>
        <div class="user-name">{user.name}</div>
      </div>
    </div>
  </div>
</div>
