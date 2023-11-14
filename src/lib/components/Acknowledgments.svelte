<script lang="ts">
	import thankYou_icon from '$assets/images/icon-thank-you.svg';
</script>

<div class="wrapper">
	<img src={thankYou_icon} alt="thank_you" />
	<h1>Thank you!</h1>
	<p>
		Thanks for confirming your subscription! We hope you have fun using our platform. If you ever
		need support, please feel free to email us at support@loremgaming.com.
	</p>
</div>

<style lang="scss">
	.wrapper {
		margin-top: 20%;

		h1 {
			margin: 30px 0 10px 0;

			font-size: 30px;
			color: var(--color-primary-marine-blue);
		}

		p {
			font-size: var(--font-size-p);
			margin: 0;
			color: var(--color-neutral-cool-gray);
			line-height: 25px;
		}
	}
</style>
