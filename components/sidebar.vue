<template>
    <div>
        <div class="logo">
            <img src="@/assets/images/logo.svg" alt="">
        </div>
        <div class="profile">
            <div class="profile-img">
                <img src="@/assets/images/user.png" alt="">
            </div>
            <div class="profile-info">
                <div class="profile-info__title">ЧП "Ахмедов"</div>
                <div class="profile-info__name">Алимов Алишер</div>
                <div class="profile-info__balance">560,00 с</div>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.logo {
    & img {
        width: px-to-vw(192px);
    }
}

.profile {
    margin: px-to-vw(32px) 0; // 32px 
    border-top: 1px solid $black;
    padding-top: px-to-vw(32px); // 32px 
    display: flex;
}

.profile-img {
    width: px-to-vw(48px); // 48px
}

.profile-info {}
</style>