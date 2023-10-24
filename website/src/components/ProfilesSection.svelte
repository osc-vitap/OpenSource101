<script>
    import ProfileCard from "./ProfileCard.svelte";

    import Contributers from "../../../.data/complete-data.json";
</script>

<section>
    <div class="mx-auto max-w-screen-xl px-4 py-20 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {#each Contributers as Contributer}
            <ProfileCard
                username={Contributer["github-username"]}
                FavouriteGame={Contributer["favourite-game"]}
                FavouriteLanguage={Contributer["favourite-language"]}
                FavouriteColor={Contributer["favourite-color"]}
            />
            {/each}
        </div>
    </div>
</section>