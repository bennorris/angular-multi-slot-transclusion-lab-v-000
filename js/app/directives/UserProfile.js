function UserProfile() {
	return {
		transclude: {
			name: 'h4',
			position: 'h6',
			bio: 'p'
		},
		template: [
			'<div>',
				'<h4>Name: </h4><span ng-transclude="name"></span>',
				'<h4>Position: </h4> <span ng-transclude="position"></span>',
				'<h4>Description: </h4><span ng-transclude="bio"></span>',
			'</div>'
		].join('')
	}
}

angular
	.module('app')
	.directive('userProfile', UserProfile);
