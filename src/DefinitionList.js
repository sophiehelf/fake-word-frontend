import React from 'react';
import { fetchDefinitions } from './fetch.js';

export default class DefinitionList extends React.Component {
	constructor(props) {
		super(props);
	}

	shouldComponentUpdate(nextProps, nextState) {
		if (nextProps) {
			return true;
		}
	}

	displayDefinitions() {
		return this.props.definitions.map((def, index) => {
			if (def.word) {
				return (
					<div>
						<ul key="index">
							<h2>{def.word.word}</h2>
							<li>Part of Speech: {def.part_of_speech}</li>
							<li>Definition: {def.definition_text}</li>
							<li>Sentence: "{def.sentence}"</li>
							<li>
								Likes: {def.likes}
								<button
									value={def.id}
									type="button"
									onClick={this.props.onLike}
								>
									Like
								</button>
							</li>
						</ul>
					</div>
				);
			} else {
				return <p>loading...</p>;
			}
		});
	}

	render() {
		return <div>{this.displayDefinitions()}</div>;
	}
}
