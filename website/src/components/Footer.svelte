<script>
    import {
        Footer,
        FooterCopyright,
        FooterLinkGroup,
        FooterLink,
        FooterBrand,
        FooterIcon,
    } from "flowbite-svelte";
    import GittyUpLogoBlack from "../images/GittyUp_Logo_Black.svelte";
    import OscFullLogo from "../images/OSC_Full_Logo.svelte";
</script>

<footer aria-label="Site Footer" class="bg-white">
    <div
        class="max-w-screen-xl px-4 py-16 mx-auto space-y-8 sm:px-6 lg:space-y-16 lg:px-8"
    >
        <div class="flex justify-between flex-col sm:flex-row">

            <OscFullLogo height="50"/>
            <ul class="flex justify-center items-center gap-6 mt-8 sm:mt-0">
                <li>
                    <a
                        href="https://www.linkedin.com/company/oscvitap/"
                        rel="noreferrer"
                        target="_blank"
                        class="text-gray-700 transition hover:opacity-75"
                    >
                        <span class="sr-only">LinkedIn</span>

                        <svg
                            class="w-6 h-6"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M21.75 0H2.25C1.009 0 0 1.009 0 2.25v19.5C0 22.991 1.009 24 2.25 24h19.5c1.241 0 2.25-1.009 2.25-2.25v-19.5C24 1.009 22.991 0 21.75 0zM7.5 20.25h-4.5v-12h4.5v12zM5.25 6.75h-.024C3.564 6.75 3 7.314 3 8.226v.024c0 .915.564 1.5 1.476 1.5h.024c.915 0 1.5-.585 1.5-1.5v-.024c0-.912-.585-1.476-1.476-1.476zM20.25 20.25h-4.5V14.4c0-1.585-.031-3.621-2.211-3.621-2.215 0-2.548 1.728-2.548 3.504v6.948h-4.5v-12h4.256v1.868h.06c.595-1.13 2.048-2.321 4.198-2.321 4.488 0 5.318 2.957 5.318 6.799v7.654z"
                                clip-rule="evenodd"
                            />
                        </svg>
                    </a>
                </li>

                <li>
                    <a
                        href="https://www.instagram.com/osc.vitap/"
                        rel="noreferrer"
                        target="_blank"
                        class="text-gray-700 transition hover:opacity-75"
                    >
                        <span class="sr-only">Instagram</span>

                        <svg
                            class="w-6 h-6"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                                clip-rule="evenodd"
                            />
                        </svg>
                    </a>
                </li>

                <li>
                    <a
                        href="https://twitter.com/osc_vitap"
                        rel="noreferrer"
                        target="_blank"
                        class="text-gray-700 transition hover:opacity-75"
                    >
                        <span class="sr-only">Twitter</span>

                        <svg
                            class="w-6 h-6"
                            fill="currentColor"
                            viewBox="0 -50 400 400"
                            aria-hidden="true"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M178.57 127.15 290.27 0h-26.46l-97.03 110.38L89.34 0H0l117.13 166.93L0 300.25h26.46l102.4-116.59 81.8 116.59h89.34M36.01 19.54H76.66l187.13 262.13h-40.66"
                                clip-rule="evenodd"
                            />
                        </svg>
                    </a>
                </li>

                <li>
                    <a
                        href="https://github.com/osc-vitap"
                        rel="noreferrer"
                        target="_blank"
                        class="text-gray-700 transition hover:opacity-75"
                    >
                        <span class="sr-only">GitHub</span>

                        <svg
                            class="w-6 h-6"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                                clip-rule="evenodd"
                            />
                        </svg>
                    </a>
                </li>

                <li>
                    <a
                        href="https://www.youtube.com/@opensourcecommunityvit-ap6954"
                        rel="noreferrer"
                        target="_blank"
                        class="text-gray-700 transition hover:opacity-75"
                    >
                        <span class="sr-only">YouTube</span>

                        <svg
                            class="w-6 h-6"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M10.5 16.985v-8.97l7.483 4.483-7.483 4.487z"
                                clip-rule="evenodd"
                            />
                        </svg>
                    </a>
                </li>
            </ul>
        </div>

        <div
            class="grid grid-cols-1 gap-8 pt-8 border-t border-gray-100 sm:grid-cols-2 lg:grid-cols-4 lg:pt-16"
        >
            <div>
                <p class="font-medium text-gray-900">About Us</p>

                <nav aria-label="Footer Navigation - Services" class="mt-6">
                    <ul class="space-y-4 text-sm">
                        <li>
                            <a
                                href="https://community.mozilla.org/en/groups/open-source-community/"
                                class="text-gray-700 transition hover:opacity-75"
                                rel="noreferrer"
                                target="_blank"
                            >
                                Mozilla Community Portal
                            </a>
                        </li>

                        <li>
                            <a
                                href="https://www.mozilla.org/en-US/about/governance/policies/participation/"
                                class="text-gray-700 transition hover:opacity-75"
                                rel="noreferrer"
                                target="_blank"
                            >
                                Community Participation Guidelines
                            </a>
                        </li>

                        <li>
                            <a
                                href="https://www.oscvitap.org/ebopenings"
                                class="text-gray-700 transition hover:opacity-75"
                                rel="noreferrer"
                                target="_blank"
                            >
                                EB Openings
                            </a>
                        </li>

                        <li>
                            <a
                                href="https://www.oscvitap.org/gallery"
                                class="text-gray-700 transition hover:opacity-75"
                                rel="noreferrer"
                                target="_blank"
                            >
                                Gallery
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>

            <div>
                <p class="font-medium text-gray-900">Contact Us</p>

                <nav aria-label="Footer Navigation - Company" class="mt-6">
                    <ul class="space-y-4 text-sm">
                        <li>
                            <a
                                href="http://localhost:5173/contact"
                                class="text-gray-700 transition hover:opacity-75"
                                rel="noreferrer"
                                target="_blank"
                            >
                                Contact
                            </a>
                        </li>

                        <li>
                            <a
                                href="https://github.com/osc-vitap"
                                class="text-gray-700 transition hover:opacity-75"
                                rel="noreferrer"
                                target="_blank"
                            >
                                GitHub Organization
                            </a>
                        </li>

                        <li>
                            <a
                                href="https://discord.com/invite/DXgfsxXv6c"
                                class="text-gray-700 transition hover:opacity-75"
                                rel="noreferrer"
                                target="_blank"
                            >
                                Discord Server
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>

            <div>
                <p class="font-medium text-gray-900">Events</p>

                <nav aria-label="Footer Navigation - Company" class="mt-6">
                    <ul class="space-y-4 text-sm">
                        <li>
                            <a
                                href="https://techeden.oscvitap.org/"
                                class="text-gray-700 transition hover:opacity-75"
                                rel="noreferrer"
                                target="_blank"
                            >
                                TechEden
                            </a>
                        </li>

                        <li>
                            <a
                                href="https://www.oscvitap.org/techcast"
                                class="text-gray-700 transition hover:opacity-75"
                                rel="noreferrer"
                                target="_blank"
                            >
                                Tech Cast Series
                            </a>
                        </li>

                        <li>
                            <a
                                href="http://localhost:5173/events"
                                class="text-gray-700 transition hover:opacity-75"
                                rel="noreferrer"
                                target="_blank"
                            >
                                More
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>

            <div>
                <p class="font-medium text-gray-900">Chapter</p>

                <nav aria-label="Footer Navigation - Legal" class="mt-6">
                    <ul class="space-y-4 text-sm">
                        <li>
                            <a
                                href="https://wios.co.in/"
                                class="text-gray-700 transition hover:opacity-75"
                                rel="noreferrer"
                                target="_blank"
                            >
                                Women in Open Source
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>

        <p class="text-xs text-gray-500">
            &copy; 2023. Open Source Community. All rights reserved.
        </p>
    </div>
</footer>
