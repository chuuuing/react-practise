class CustomTextInput extends Component {
  constructor(props) {
    super(props);
    this.textInput = null;
    this.setTextInputRef = (element) => {
      this.textInput = element;
    };
    this.focusTextInput = () => {
      // 使用原生 DOM API 使 text 输入框获得焦点
      if (this.textInput) this.textInput.focus();
    };
  }

  componentDidMount() {
    // 组件挂载后，让文本框自动获得焦点
    this.focusTextInput();
  }

  render() {
    return (
      <div>
        <input type="text" ref={this.setTextInputRef} />
        <input
          type="button"
          value="Focus on the text input"
          onClick={this.focusTextInput}
        />
      </div>
    );
  }
}

export default CustomTextInput;
