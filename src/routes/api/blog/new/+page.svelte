<script>
	const time = new Date();
	const publishTime =
		time.toLocaleDateString('sv-SE') + 'T' + time.toLocaleTimeString('sv-SE').slice(0, 5);
	console.log(publishTime);
</script>

<div class="doc-shell-sandbox mx-4 space-y-8 md:space-y-12">
	<div class="card">
		<div class="p-4">
			<form method="POST" action="?/compose">
				<label class="input-label">
					<span>Title</span>
					<input name="title" type="text" value="Test Post Title" required />
				</label>
				<label class="input-label"
					><span>Publish Date and Time</span>
					<input name="publish_time" type="datetime-local" value={publishTime} /></label
				>
				<label>
					<span>Cool Sentences</span>
					<textarea
						rows="15"
						name="content"
						class="form-textarea"
						value="Test text for another test post."
					/>
				</label>
				<button class="variant-filled-secondary">Post</button>
			</form>
		</div>
	</div>
</div>
