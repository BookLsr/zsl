<template>
    <div>
        <app-header></app-header>
        <app-container></app-container>
        <app-footer></app-footer>
    </div>
</template>

<script>
import AppHeader from './header'
import AppContainer from './container'
import AppFooter from './footer'
export default {
    components: {
        AppHeader,
        AppContainer,
        AppFooter
    }
}
</script>
