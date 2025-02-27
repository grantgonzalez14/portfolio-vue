<template>
	<div class="flex flex-col items-center lg:flex-row lg:items-start bg-(--bg-tertiary) rounded-md p-4 w-full lg:w-[70%]">
		<span class="flex transition duration-[calc(--transition-speed)*0.75)] h-28 w-28 border-[#407E8A] border-[4px] justify-center items-center rounded-full overflow-hidden lg:mr-4">
			<slot name="image" />
		</span>
		<div class="flex flex-col w-full lg:w-[calc(100%-8rem)]">
			<div class="flex flex-col lg:flex-row items-center justify-center lg:justify-between text-center lg:text-start">
				<div class="flex flex-col">
					<span class="font-semibold tracking-wide text-[18px] lg:text-[24px]">
						<slot name="jobTitle" />
					</span>
					<span class="flex items-center justify-center lg:justify-start gap-2">
						<i class="pi pi-building" />
						<slot name="company" />
					</span>
				</div>
				<div class="flex shadow-sm shadow-black h-fit px-2 items-center gap-2">
					<i class="pi pi-calendar" />
					<slot name="dateStart" />
					<i class="pi pi-arrow-right" style="font-size: 12px" />
					<slot name="dateEnd" />
				</div>
			</div>
			<span class="flex items-center gap-2 my-4">
				<slot name="jobDescription" />
			</span>
			<div class="flex flex-wrap justify-center lg:justify-start max-w-full lg:max-w-[calc(100%-8rem)] gap-4">
				<span v-for="tag in props.tags" class="flex px-2 py-1 shadow-sm shadow-[#ECECEC] rounded-sm bg-[#407E8A]">
					{{ tag }}
				</span>
			</div>
		</div>
		
	</div>
	
</template>

<script setup lang="ts">
	import 'primeicons/primeicons.css';
	import { useWindowSize } from "@vueuse/core";
	
	const props = defineProps<{ tags?: string[] }>();
	const { width } = useWindowSize();
</script>

<style scoped lang="scss">

</style>