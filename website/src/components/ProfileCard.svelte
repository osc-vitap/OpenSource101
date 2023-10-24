<script>
    export let username = "osc-vitap";
    export let FavouriteGame = "sample_game";
    export let FavouriteLanguage = "sample_language";
    export let FavouriteColor = "#000000";

    let styles = {
        FavouriteColor: FavouriteColor,
    };
</script>

<a
    href="https://github.com/{username}"
    class="relative block overflow-hidden rounded-lg border bg-white border-gray-100 p-6 hover:shadow-lg transition-shadow duration-200"
>
    <span
        class="color-strip absolute inset-x-0 bottom-0 h-2"
        style="background: linear-gradient(to right, {styles.FavouriteColor}, #d9d9d9)"
    />

    <div class="flex justify-between gap-4">
        <div>
            <h3 class="text-lg font-bold text-gray-900 sm:text-xl">
                {username}
            </h3>

            <p class="mt-1 text-xs font-medium text-gray-600">Opensource101 participant!</p>
        </div>

        <div class="">
            <img
                alt = "Github profile picture of {username}"
                src="https://github.com/{username}.png?size=100"
                class="h-20 w-20 rounded-lg object-cover shadow-sm"
            />
        </div>
    </div>

    <div>
        <p class="max-w-[33ch] text-sm truncate text-gray-500">
            Favourite Game: {FavouriteGame}
        </p>
        <p class="max-w-[33ch] text-sm text-ellipsis text-gray-500">
            Favourite Language: {FavouriteLanguage}
        </p>
        <p class="max-w-[33ch] text-sm text-ellipsis text-gray-500">
            Favourite Color: {FavouriteColor}
        </p>
    </div>
</a>
