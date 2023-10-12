<script lang="ts">
  import clsx from "clsx";
  // The non typed version allows stuff to work
  export let section = {};

  // // Typed Version (that causes the dev to break)
  // export let section: {
  //   bgColor: string;
  //   customBgColor: string;
  //   title: string;
  //   content: string;
  //   bgImage: string;
  //   card: string;
  //   id: string;
  //   displayType: string;
  // };

  // // or

  // export let section: any = {};

  let {
    bgColor,
    customBgColor,
    title,
    content,
    bgImage,
    card,
    id,
    displayType,
  } = section;

  const isCarousel = displayType === "carousel";
  const isTab = displayType === "tab";
</script>

<section
  class={clsx([
    bgImage ? `bg-cover bg-no-repeat bg-center ` : "",
    bgColor === "custom" ? customBgColor : bgColor,
  ])}
  style={bgImage && `background-image: url(${bgImage?.src})`}
>
  <div
    class={clsx([
      // Meaning, if content is empty or has just one value, i.e. not a carousel
      !isCarousel && !isTab && "container md-px-20 lg-px-50",
      !isTab && "p-10 ",
      "mx-a flex flex-col gap-10",
    ])}
  >
    {#if title}
      <div
        class="font-(clash semibold) text-(primary 3xl center) md:(text-4xl) grid place-items-center"
      >
        {title}
        <!-- <img alt="Sqiuglly underline" src={squiggly.src} /> -->
      </div>
    {/if}
    {#if content}
      {#if isCarousel}
        <!-- For Carousel -->
        <!-- <RenderCarousel {title} {content} /> -->
        Render Carousel
      {:else if isTab}
        <div class="relative z-2">
          <!-- <RenderTab contents={card} /> -->
          Render Tab
        </div>
      {:else}
        <!-- For Normal Image and/or Text Sections -->
        {#each content as child}
          <!-- <RenderSection content={child} /> -->
          Render Section
        {/each}
      {/if}
    {/if}

    {#if card.length && !isTab}
      <div class="flex flex-wrap justify-center gap-10 md-(text-xl)">
        {#each card as { cardContent }}
          <div
            class="p-5 b b-coolGray br-xl flex flex-col items-center text-center space-y-2 max-w-35ch hover-(translate-y--1.5) transition-500"
          >
            <!-- <RenderText children={cardContent} /> -->
            Render Text
          </div>
        {/each}
      </div>
    {/if}
  </div>
</section>

<style>
  .lightBlue {
    @apply bg-#DFEAFF;
  }
  .lighterBlue {
    @apply bg-#EAF1FE;
  }
  .darkBlue {
    @apply bg-primary text-white;
  }
</style>
