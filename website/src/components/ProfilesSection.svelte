<script>
    import ProfileCard from "./ProfileCard.svelte";
    const apiURL = "https://raw.githubusercontent.com/osc-vitap/OpenSource101/main/.data/complete-data.json";
    let ContributersObject = [];
    let Contributers = [];
    
    fetch(apiURL)
        .then((response) => response.json())
        .then((data) => {
            ContributersObject = data;
            Contributers = Object.values(ContributersObject);
        })
        .catch((error) => {
            console.error("Error:", error);
        });
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