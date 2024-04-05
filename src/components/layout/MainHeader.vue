<template>
    <header>
        <b-navbar>
            <template #brand>
                <b-navbar-item href="#">
                    <img src="https://raw.githubusercontent.com/buefy/buefy/dev/static/img/buefy-logo.png"
                        alt="Lightweight UI components for Vue.js based on Bulma">
                </b-navbar-item>
            </template>
            <template #start>
                <b-navbar-item href="#">
                    Home
                </b-navbar-item>
                <b-navbar-item href="#">
                    Exchange
                </b-navbar-item>
                <b-navbar-item href="#">
                    Swap(Pro)
                </b-navbar-item>
                <b-navbar-item href="#">
                    Option Contract
                </b-navbar-item>
                <b-navbar-item href="#">
                    C2C Exchange
                </b-navbar-item>
                <b-navbar-item href="#">
                    OTC
                </b-navbar-item>
                <b-navbar-item href="#">
                    BITEX Lab
                </b-navbar-item>
                <b-navbar-item href="#">
                    Promoting Partner
                </b-navbar-item>
                <b-navbar-item href="#">
                    Announcement
                </b-navbar-item>
                <b-navbar-item href="#">
                    White Paper
                </b-navbar-item>
            </template>

            <template #end>

                <b-navbar-item tag="div">

                </b-navbar-item>

                <b-navbar-item tag="div">
                    <div class="control has-icons-left">
                        <div class="select is-small">
                            <select>
                                <option selected>Eng</option>
                                <option>RUS</option>
                                <option>UZB</option>
                            </select>
                        </div>
                        <div class="icon is-small is-left">
                            <b-icon icon="earth is-small" size="is-small"></b-icon>
                        </div>
                    </div>
                </b-navbar-item>
                <b-navbar-item tag="div">
                    <b-switch left-label='true' @click="toggle">
                        <b-icon icon="theme-light-dark"></b-icon>
                    </b-switch>
                </b-navbar-item>

                <b-navbar-item tag="div">
                    <!-- <div class="buttons">
                        <a class="button is-light">
                            Log in
                        </a>
                        <a class="button is-light">
                            Log in
                        </a>
                        <a class="button is-light">
                            Download APP
                        </a>
                        <b-navbar-dropdown label="lang">
                            <b-navbar-item href="#">
                                en
                            </b-navbar-item>
                            <b-navbar-item href="#">
                                uz
                            </b-navbar-item>
                        </b-navbar-dropdown>

                    </div> -->

                </b-navbar-item>
            </template>
        </b-navbar>
    </header>

</template>

<script>

export default {
    name: 'MainHeader',
    props: ['isActive'],
    methods: {
        toggle() {
            this.$emit('toggle');
            console.log('toggle');
        }
    }
}

</script>