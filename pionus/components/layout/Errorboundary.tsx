import React, { Component, ReactNode } from "react";
import { AlertTriangle, RefreshCw, Home } from "lucide-react";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
  errorInfo: React.ErrorInfo | null;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
    };
  }

  static getDerivedStateFromError(error: Error): State {
    return {
      hasError: true,
      error,
      errorInfo: null,
    };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("Error caught by boundary:", error, errorInfo);
    this.setState({
      error,
      errorInfo,
    });
  }

  handleReset = () => {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null,
    });
  };

  handleReload = () => {
    window.location.reload();
  };

  handleGoHome = () => {
    window.location.href = "/";
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-merino-50 flex items-center justify-center p-4">
          <div className="max-w-2xl w-full bg-white rounded-xl shadow-lg p-8">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center">
                <AlertTriangle className="w-10 h-10 text-red-600" />
              </div>
            </div>

            <h1 className="text-2xl text-merino-950 text-center mb-3">
              Oops! Something went wrong
            </h1>
            <p className="text-merino-700 text-center mb-8">
              We encountered an unexpected error. Don't worry, we're working on
              it.
            </p>

            {process.env.NODE_ENV === "development" && this.state.error && (
              <div className="bg-merino-50 border border-merino-200 rounded-lg p-4 mb-6 max-h-60 overflow-auto">
                <p className="text-sm text-merino-950 mb-2">
                  <strong>Error:</strong> {this.state.error.toString()}
                </p>
                {this.state.errorInfo && (
                  <details className="text-xs text-merino-700 mt-3">
                    <summary className="cursor-pointer hover:text-merino-900">
                      Stack Trace
                    </summary>
                    <pre className="mt-2 whitespace-pre-wrap wrap-break-words">
                      {this.state.errorInfo.componentStack}
                    </pre>
                  </details>
                )}
              </div>
            )}

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={this.handleReset}
                className="flex items-center justify-center gap-2 px-6 py-3 bg-tahiti-gold-500 text-white rounded-lg hover:bg-tahiti-gold-700 transition-colors"
              >
                <RefreshCw className="w-5 h-5" />
                Try Again
              </button>
              <button
                onClick={this.handleReload}
                className="flex items-center justify-center gap-2 px-6 py-3 border border-merino-300 text-merino-700 rounded-lg hover:bg-merino-50 transition-colors"
              >
                Reload Page
              </button>
              <button
                onClick={this.handleGoHome}
                className="flex items-center justify-center gap-2 px-6 py-3 border border-merino-300 text-merino-700 rounded-lg hover:bg-merino-50 transition-colors"
              >
                <Home className="w-5 h-5" />
                Go Home
              </button>
            </div>

            <div className="mt-8 pt-6 border-t border-merino-200 text-center">
              <p className="text-sm text-merino-600">
                If this problem persists, please contact our support team at{" "}
                <a
                  href="mailto:support@archsafaris.com"
                  className="text-tahiti-gold-500 hover:underline"
                >
                  support@archsafaris.com
                </a>
              </p>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
