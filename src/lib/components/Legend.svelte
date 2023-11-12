<script lang="ts">
	const legend = ['YOUR INFO', 'SELECT PLAN', 'ADD-ONS', 'SUMMARY'];
</script>

<div class="wrapper">
	{#each legend as title, index}
		<div class="container">
			<div class="number-indicator">{index + 1}</div>
			<div class="section">
				<h3>STEP {index + 1}</h3>
				<p>{title}</p>
			</div>
		</div>
	{/each}
</div>

<style lang="scss">
	.wrapper {
		padding: 30px 10px 30px 35px;
		height: 568px;
		width: 274px;
		background-image: url('$assets/images/bg-sidebar-desktop.svg');
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: flex-start;
		gap: 25px;
	}

	.container {
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		align-items: center;
		gap: 15px;
	}

	.number-indicator {
		border-radius: 18px;
		width: 36px;
		height: 36px;

		display: flex;
		justify-content: center;
		align-items: center;
		border: 1px solid var(--color-neutral-white);
		color: white;

		p {
			margin: 0;
		}
	}

	.section {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: flex-start;
		gap: 2px;

		h3 {
			margin: 0;
			font-size: 12px;
			color: var(--color-neutral-cool-gray);
		}

		p {
			margin: 0;
			font-weight: 700;
			color: var(--color-neutral-white);
			font-size: 15px;
		}
	}
</style>
