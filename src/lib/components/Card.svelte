<script lang="ts">
	export let icon: string;
	export let title: string;
	export let cost: number;
</script>

<div class="wrapper">
	<img class="icon" alt="icon" src={icon} />
	<section>
		<h2>{title}</h2>
		<p>${cost}/mo</p>
	</section>
</div>

<style lang="scss">
	.wrapper {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: flex-start;
		padding: 20px;
		border-radius: 10px;
		border: 1px solid var(--color-neutral-cool-gray);
		width: 150px;
		height: 200px;
		cursor: pointer;

		&:hover {
			border: 1px solid var(--color-primary-purplish-blue);
			background-color: var(--color-neutral-alabaster);
		}

		section {
			display: flex;
			flex-direction: column;
			align-items: flex-start;
			gap: 5px;

			h2 {
				font-weight: 700;
				font-size: 20px;
				margin: 0px;
			}

			p {
				font-size: var(--font-size-p);
				font-weight: 500;
				margin: 0px;
				color: var(--color-neutral-cool-gray);
			}
		}
	}
</style>
