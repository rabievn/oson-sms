<template>
    <ul class="mailing-list">
        <li>
            <span class="mailing-list__date">10.12.2023 </span><span class="mailing-list__text">До
                17.10.2023 получите скидку -15% на все товары для мытья
                волос </span><span class="mailing-list__status status-pending">В процессе</span>
        </li>
        <li>
            <span class="mailing-list__date">09.12.2023 </span><span class="mailing-list__text">-20%
                на
                товары с красным ценником</span>
            <span class="mailing-list__status status-success">Завершена</span>
        </li>
        <li>
            <span class="mailing-list__date">08.12.2023 </span><span class="mailing-list__text">Sed
                ut
                perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, to</span>
            <span class="mailing-list__status status-success">Завершена</span>
        </li>
        <li>
            <span class="mailing-list__date">07.12.2023 </span><span class="mailing-list__text">Excepteur sint occaecat
                cupidatat non proident, sunt in
                culpa
                qui officia deserunt mollit anim id es</span>
            <span class="mailing-list__status status-success">Завершена</span>
        </li>
        <li>
            <span class="mailing-list__date">08.11.2023 </span><span class="mailing-list__text">Ut
                enim
                ad minima veniam, quis nostrum exercitationem ullam
                corporis suscipit laboriosam, nisi ut al</span>
            <span class="mailing-list__status status-success">Завершена</span>
        </li>
        <li>
            <span class="mailing-list__date">08.11.2023 </span><span class="mailing-list__text">Quis
                autem vel eum iure reprehenderit qui in ea voluptate velit
                esse quam nihil molestiae consequatu</span>
            <span class="mailing-list__status status-success">Завершена</span>
        </li>
        <li>
            <span class="mailing-list__date">30.10.2023 </span><span class="mailing-list__text">Ut
                enim
                ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo con</span>
            <span class="mailing-list__status status-success">Завершена</span>
        </li>
        <li>
            <span class="mailing-list__date">05.09.2023 </span><span class="mailing-list__text">Nemo
                enim ipsam voluptatem quia voluptas sit aspernatur aut
                odit aut fugit, sed quia consequuntur ma</span>
            <span class="mailing-list__status status-success">Завершена</span>
        </li>
        <li>
            <span class="mailing-list__date">03.08.2023 </span><span class="mailing-list__text">Sed
                ut
                perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, to</span>
            <span class="mailing-list__status status-success">Завершена</span>
        </li>
    </ul>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.mailing-list {
    li {
        :not(:last-child) {
            margin-bottom: 1rem;
        }

        max-width: 100%;
        display: flex;
        gap: 2rem;
        white-space: nowrap;
        // justify-content: space-between;
    }

    &__date {
        // flex: 0 1 10.65%;
    }

    &__text {
        text-overflow: ellipsis;
        max-width: 40.9375rem;
        overflow: hidden;
    }

    &__status {
        margin-left: auto;
    }

    .status-pending {
        color: $yellow;
    }

    .status-success {
        color: $green;
    }
}
</style>