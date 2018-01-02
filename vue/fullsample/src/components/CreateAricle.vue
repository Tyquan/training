<template>
	<div>
		<h1>Create a new Article</h1>
		<form>
			<div class="row">
				<div class="col-md-6">
					<div class="form-group">
						<label>Article Title</label>
						<input type="text" class="form-control" name="title" v-model="article.title">
					</div>
				</div>
			</div><!-- end .row -->
			<div class="row">
				<div class="col-md-6">
					<div class="form-group">
						<label>Article Text</label>
						<textarea class="form-control" name="text" v-model="article.body"></textarea>
					</div>
				</div>
			</div><!-- end .row -->
			<br>
			<div class="form-group">
				<button class="btn btn-primary">Add Article</button>
			</div>
		</form>
	</div>
</template>
export default {
	data(){
		return{
			article: {}
		}
	},
	methods: {
		addArticle(){}
	}
}