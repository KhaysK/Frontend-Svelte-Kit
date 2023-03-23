<script lang="ts">
    import { page } from "$app/stores";
    import { base } from '$app/paths';
    $: routeId = $page.route.id;
</script>

<div id="navbar">
    <div id="logo">Khays logo</div>
    <div id="links-container">
        <a href="{base}/" class:active={routeId == "/"}>Home</a>
        <a href="{base}/comic" class:active={routeId == "/comic"}>Comic</a>
    </div>
</div>

<style>
    #navbar{
        height: 60px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        background-color: #453c38;
        flex-shrink: 0;
    }

    #links-container{
        display: flex;
        gap: 32px;
        font-size: 24px;
    }

    #logo{
        font-size: 32px;
        font-weight: bold;
        color: #f4efdb;
    }

    .active{
        font-weight: bold;
    }
</style>